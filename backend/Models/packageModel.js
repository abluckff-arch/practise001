import mongoose from "mongoose";

const packageSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Package title is required"],
            trim: true,
        },
        description: {
            type: String,
            required: [true, "Package description is required"],
        },
        price: {
            type: Number,
            required: [true, "Price is required"],
        },
        duration: {
            type: String,
            required: [true, "Duration is required"],
            
        },
        images: [
            {
                public_id: String,
                url: String,
            },
        ],
    },
    { timestamps: true }
);

export default mongoose.model("Package", packageSchema);