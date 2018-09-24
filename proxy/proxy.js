function target(a,b,...args) { return 'I am a concrete method'; };
var handlerLogger = {
    apply: function (receiver, ...args) {
        console.log(`call ${receiver} method with args : ${args.join(' ')}`);
        return receiver(args);
    }
};

var proxyLogger = new Proxy(target, handler);
p(1, 2, 3, 4);