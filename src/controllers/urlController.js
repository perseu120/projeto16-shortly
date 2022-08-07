import connection from "../database/db.js";

export async function setShortenLink(req, res){

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

    res.redirect(link[0].longLink);
}

export async function deleteUrl(req, res){
    
}