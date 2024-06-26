const keys = require("./keys");
const redis = require("redis");

const redisClient = redis.createClient({
    host: keys.redisHost,
    port: keys.redisPort,
    retry_strategy: () => 1000
});

const sub = redisClient.duplicate();

const fib = (index) => {
    return index < 2 ? 1 : fib(index - 2) + fib(index - 1)
}

sub.on("message", (channel, message) => {
    redisClient.hset("values", message, fib(parseInt(message)));
});

sub.subscribe("insert");