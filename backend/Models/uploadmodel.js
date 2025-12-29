import mongoose from "mongoose";

const uploadImagesSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            required: true,
            trim: true,
        },
        price: {
            type: Number,
            required: true,
        },
        duration: {
            type: String,
            required: true,
        },
        tvOptions: {
            type: String,
            required: true,
        },
        images: [
            {
                url: String,
                public_id: String,
            }
        ],
    },
    { timestamps: true }
);

export const UploadImages = mongoose.model("UploadImages", uploadImagesSchema);
