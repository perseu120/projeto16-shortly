import connection from "../database/db.js";

export async function getUsers(req, res){

    const idUser = res.locals.idUsers;

    const{rows:user} = await connection.query(`SELECT u.id, u.name, 
        SUM(l."visitLink") AS "visitCount"
        FROM users u
        JOIN links l ON $1 = u.id
        GROUP BY u.id`, [idUser]);

    const {rows:link} = await connection.query(`SELECT l."shortLink", l."longLink", l."visitLink"
    FROM links l 
    WHERE l."idUsers" = $1`, [idUser]);

    user[0].shortenedUrls = link;

    res.status(200).send(user[0]);
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

    res.status(200).send(ranking);
    
}