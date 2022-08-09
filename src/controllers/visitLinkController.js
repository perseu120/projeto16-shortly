import connection from "../database/db.js";

export async function getUsers(req, res){

}

export async function getRanking(req, res){

    const{rows:ranking} = await connection.query(`SELECT u.id, u.name, 
        COUNT(l."visitLink") AS "linksCount",
        SUM(l."visitLink") AS "visitCount"
        FROM links l
        JOIN users u ON l."idUsers" = u.id
        GROUP BY u.id
        ORDER BY "linksCount" DESC
        LIMIT 10` );

    console.log(ranking);

    res.status(200).send("ok");
    
}