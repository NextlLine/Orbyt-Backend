export const jwtConstants = {
    secret: process.env.JWT_SECRET_KEY,
    signOptions: { expiresIn: '86400s' }
};