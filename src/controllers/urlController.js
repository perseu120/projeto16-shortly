import connection from "../database/db.js";
import { customAlphabet } from 'nanoid'
const nanoid = customAlphabet('1234567890abcdef', 10)

export async function setShortenLink(req, res){

    const shortUrl = nanoid();
    const {url} = req.body;
    const idUsers = res.locals.idUsers;

    await connection.query('INSERT INTO links ("shortLink", "longLink", "idUsers") VALUES ($1, $2, $3)', [shortUrl, url, idUsers])
    
    res.status(201).send(shortUrl)
}

export async function getUrlId(req, res){

    const {id} = req.params;

    const {rows: url } = await connection.query('SELECT id, "shortLink", "longLink" FROM links WHERE id = $1', [id]);

    if(url.length < 1){
        res.sendStatus(404);
        return;
    }

    res.status(200).send(url[0]);

}

export async function getOpenShortUrl(req, res){
    
    const {shortUrl} = req.params;
    
    const {rows: link} = await connection.query('SELECT "longLink" FROM links WHERE "shortLink" = $1', [shortUrl]);

    if(link.length < 1){
        res.sendStatus(404);
        return;
    }

    await connection.query(`UPDATE links SET "visitLink" = "visitLink" + 1 WHERE "shortLink" = $1`, [shortUrl]);

    res.redirect( 302, link[0].longLink);
}

export async function deleteUrl(req, res){
    
    //pegar o id do usuario que vem pelo token
    //e proucura o link pelo id passado pela rota
    // e comprara se o id so usuario é igual o idusuario que tem na tabela de links
    //se for apagar o link

}