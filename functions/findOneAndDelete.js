exports = function findOneAndDelete(request) {

    const {
        filter,
        database,
        dataSource,
        collection,
        ...options
    } = JSON.parse(request.body.text());

    const target = context.services.get(dataSource).db(database).collection(collection);
    return target.findOneAndDelete(filter, options);

}
