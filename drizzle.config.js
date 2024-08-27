/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./configs/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://neondb_owner:y5pNUSvLwP8s@ep-summer-cake-a10spxjq.ap-southeast-1.aws.neon.tech/Car-Market-Place?sslmode=require",
  },
};
