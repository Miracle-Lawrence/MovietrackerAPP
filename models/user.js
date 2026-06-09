const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "First name is required"],
      trim: true,
      minlength: [2, "First name must be at least 2 characters"],
      maxlength: [50, "First name cannot exceed 50 characters"],
    },

    lastName: {
      type: String,
      required: [true, "Last name is required"],
      trim: true,
      minlength: [2, "Last name must be at least 2 characters"],
      maxlength: [50, "Last name cannot exceed 50 characters"],
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
    },

    phone: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
      minlength: [7, "Phone number must be at least 7 characters"],
      maxlength: [15, "Phone number cannot exceed 15 characters"],
    },

    address: {
      type: String,
      required: [true, "Address is required"],
      trim: true,
      minlength: [5, "Address must be at least 5 characters"],
    },

    membershipType: {
      type: String,
      enum: {
        values: ["regular", "premium", "vip"],
        message: "Membership type must be regular, premium, or vip",
      },
      default: "regular",
    },

    dateJoined: {
      type: Date,
      default: Date.now,
    },

    active: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("User", userSchema);
