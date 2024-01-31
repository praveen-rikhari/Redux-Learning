const myMiddleware = (store) => (next) => (action) =>{
    console.log("Action :" , action);
    next(action);
};

export default myMiddleware;