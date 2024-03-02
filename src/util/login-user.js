export const dummyUser = {
    username: "jovana123",
    password: "jovana123",
};

const waitOneSecond = () => {
    return new Promise((resolver) => setTimeout(resolver, 1000));
};

const loginUser = async () => {
    await waitOneSecond();
    return dummyUser;
};

export default loginUser;