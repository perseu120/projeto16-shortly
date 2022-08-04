import joi from "joi";
import connection from "../database/db.js";
import dayjs from "dayjs";



export async function getRentals(req, res){ //falta adicionar a buscar com a query string
    

    const {rows:dadosRentals } =  await connection.query(`SELECT * FROM rentals`)

    const {rows:dadosCustomer } =  await connection.query(`SELECT * FROM customers c`)

    const {rows:dadosGamer } =  await connection.query(`SELECT g.*, c.name as categoryName FROM games g 
    JOIN categories c 
    ON g."categoryId" = c.id `)


    dadosCustomer.map(items =>{
        delete items.phone;
        delete items.cpf;
        delete items.birthday;
    });
    dadosGamer.map(items =>{
        delete items.image;
        delete items.stockTotal;
        delete items.pricePerDay;
    });

    const resultado = dadosRentals.map(rentals => ({
        ...rentals,
        customer: dadosCustomer.find( rental => rental.id === rentals.customerId ),
        game: dadosGamer.find( game => game.id === rentals.gameId)
    }))

    res.status(200).send(resultado);
}

export async function setRentals(req, res){//falta verificar quantos tem disponiveis para aluguel

    const schemaRentals = joi.object({
        customerId: joi.number().min(1),
        gameId: joi.number().min(1),
        daysRented: joi.number().min(1)
    })

    const {
        customerId,
        gameId,
        daysRented
    } = req.body

    const validateDados = schemaRentals.validate(req.body);

    if(validateDados.error){
        res.status(400).send("dados invalidos")
    }

    const {rows:dadosCustomer } =  await connection.query(`SELECT * FROM customers c WHERE c.id = $1 `, [customerId])

    if(dadosCustomer.length <= 0){
        res.status(400).send("esse cliente não esta cadastrado");
        return;
    }

    const {rows:dadosGamer } =  await connection.query(`SELECT * FROM games g WHERE g.id = $1 `, [gameId])

    if(dadosGamer.length <= 0){
        res.status(400).send("esse jogo não esta cadastrado");
        return;
    }

    const rentals = {
        rentDate: new Date(),
        daysRented,             
        returnDate: null,          
        originalPrice: daysRented * dadosGamer[0].pricePerDay,
        delayFee: null  
    }

    const {
        rentDate,
        returnDate,
        originalPrice,
        delayFee
 
     } = rentals;

    await connection.query(`INSERT INTO rentals ("customerId", "gameId", "rentDate", "daysRented", "returnDate", "originalPrice", "delayFee"  ) 
    VALUES ($1,$2,$3,$4, $5, $6 ,$7)`, [customerId, gameId, rentDate, daysRented, returnDate, originalPrice, delayFee])

    res.sendStatus(201);

}

export async function setRentalsDevolution(req, res){//falta fazer as validações e as query String
    
    const {id} = req.params;

    const {rows:dataRentals } = await connection.query(`SELECT "rentDate", "gameId" FROM rentals r WHERE r.id = $1`,[id]);
    const {rows:pricePerDay} = await connection.query(`SELECT "pricePerDay" FROM games WHERE id = $1`, [dataRentals[0].gameId]);

    const DiferencaDatasInicioFim = dayjs().diff(dataRentals[0].dataRentals,'day');
    const valorAtrasado = Math.abs(DiferencaDatasInicioFim) * pricePerDay[0].pricePerDay
    
    connection.query(`UPDATE rentals SET "returnDate" = $2, "delayFee" = $3 WHERE id = $1`, [id, new Date(), valorAtrasado]);

    res.sendStatus(200);

}

export async function deleteRentals(req, res){
    
    const {id} = req.params;

    const {rows:rental} = await connection.query(`SELECT * FROM rentals r WHERE r.id = $1`, [id]);

    if(rental.length <= 0){
        res.sendStatus(404);
        return;
    }

    if(rental[0].returnDate === null){
        res.sendStatus(400);
        return;
    }

    await connection.query(`DELETE FROM rentals r WHERE r.id = $1`, [id]);

    res.sendStatus(200);

}

