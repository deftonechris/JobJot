const errorHandlerMiddleware = (err, req, res, next) => {
    console.error(err);
    res.status(500).json({ message: "An error occurred" });
}

export default errorHandlerMiddleware;