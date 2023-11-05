exports = function findOneAndUpdate(request) {

    const {
        filter,
        update,
        database,
        dataSource,
        collection,
        ...options
    } = JSON.parse(request.body.text());

    const target = context.services.get(dataSource).db(database).collection(collection);
    return target.findOneAndUpdate(filter, update, options);

}
