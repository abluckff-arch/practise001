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
            enum: ["1 Month", "3 Months", "6 Months", "Yearly"],
            default: "1 Month",
        },
        images: [
            {
                url: {
                    type: String,
                    required: true,
                },
                public_id: {
                    type: String,
                    required: true,
                },
            }
        ],
    },
    { timestamps: true }
);

export const UploadImages = mongoose.model("UploadImages", uploadImagesSchema);
