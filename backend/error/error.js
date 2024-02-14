class Errorhandler extends Error {
    constructor(message,statuscode){
        super(message);
        this.statuscode = statuscode;
    }
}
export const errorMiddliWare =(err, req, res, next)=>{
    err.message = err.message || "internal server error!";
    err.statuscode = err.statuscode || 500;


    if (err.name === "CastError") {
        const message = `Resource not found. Invalid: ${err.path}`;
        err = new Errorhandler(message,400);
      }
    
    
      if (err.name === 'ValidationError') {       
        const validationErrors = Object.values(error.errors).map(err=> err.message)       
        return next(new Errorhandler(validationErrors.join(','),400));
      }

    return res.status(err.statuscode).json({
        success: false,
        message: err.message
    })
}
export default Errorhandler;