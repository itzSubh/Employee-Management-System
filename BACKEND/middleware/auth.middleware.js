import jwt from "jsonwebtoken";

export const protect = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if(!authHeader || !authHeader.startsWith("Bearer ")){
            console.error('protect middleware: missing or invalid Authorization header', {authorization: req.headers.authorization});
            return res.status(401).json({error: "Unauthorized"});

        }
        const token = authHeader.split(" ")[1];
        let session;
        try{
            session = jwt.verify(token, process.env.JWT_SECRET);
        } catch(err){
            console.error('protect middleware: token verify failed', err.message);
            return res.status(401).json({error: "Unauthorized"});
        }
        if(!session){
            return res.status(401).json({error: "Unauthorized"});
        }
        req.session = session;
        next();
    } catch (error) {
        console.error('protect middleware error:', error);
        return res.status(401).json({error: "Unauthorized"});
    }
}

export const protectAdmin = (req, res, next) => {
    if(req?.session?.role !== "ADMIN"){
        return res.status(403).json({error: "Admin access required "});
    }
    next();
}