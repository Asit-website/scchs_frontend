/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXTAUTH_SECRET:"Instacertify",
    NEXTAUTH_URL:"https://scchs-frontend.vercel.app/",
    next:{
      api_url:"https://scchs-frontend.vercel.app/api/v1/"
    },
    
    server : {
		path:"https://admin.kmiroofing.com/",
   		api:"https://admin.kmiroofing.com/api/",
      	jwt_secret:"UOUkeFnqauTf3qw0Hy6pv1JQq572l82gRBgnNbemPEjV2bTG2Bg0A3avm1svL9gs"
    }
  },
  reactStrictMode: false,
  experimental: {
      scrollRestoration: true
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  images: {
    domains: ['admin.kmiroofing.com','cdn11.bigcommerce.com'],
  }
}

module.exports = nextConfig