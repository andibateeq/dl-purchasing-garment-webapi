const apiVersion = '1.0.0';
var Manager = require("dl-module").managers.garmentPurchasing.DeliveryOrderManager;
var JwtRouterFactory = require("../../jwt-router-factory");

function getRouter() {
    var router = JwtRouterFactory(Manager, {
        version: apiVersion,
        defaultOrder: {
            "_createdDate": -1
        },
        defaultFilter: (request, response, next) => {
            return {
                "_createdBy": request.user.username
            };
        },
        // defaultSelect: ["no", "supplierDoDate", "supplier.name", "items.purchaseOrderExternalNo"]
    });
    return router;
}
module.exports = getRouter;