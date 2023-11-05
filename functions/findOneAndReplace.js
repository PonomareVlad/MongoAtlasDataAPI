exports = function findOneAndReplace(request) {

    const {
        filter,
        database,
        dataSource,
        collection,
        replacement,
        ...options
    } = JSON.parse(request.body.text());

    const target = context.services.get(dataSource).db(database).collection(collection);
    return target.findOneAndReplace(filter, replacement, options);

}
