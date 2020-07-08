module.exports = ({ env }) => ({
    upload: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env('dx7qzclmr'),
        api_key: env('841721213755922'),
        api_secret: env('HJytNg_OUNz7r5IpU7XL3WHXHuU')
      }
    }
  });