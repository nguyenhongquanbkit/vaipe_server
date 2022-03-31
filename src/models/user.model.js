module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            account: String,
            pass: String,
            email: String
        },
        { timestamps: true }
    );
    schema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });
    const UserInfo = mongoose.model("user_info", schema);
    return UserInfo;
};