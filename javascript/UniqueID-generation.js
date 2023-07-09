function generateUniqueId() {
    //return (performance.now().toString(36)+Math.random().toString(36)).replace(/\./g,"");
    return (Date.now().toString(36));//+Math.random().toString(36)).replace(/\./g,"");
};