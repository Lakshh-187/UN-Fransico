// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//         remotePatterns: [{
//             protocol: 'https',
//             hostname: "i.ibb.co",
//             port: "",
//         }]
//     }
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.ibb.co',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'firebasestorage.googleapis.com',
                port: '',
            },
        ],
    },
};

export default nextConfig;
