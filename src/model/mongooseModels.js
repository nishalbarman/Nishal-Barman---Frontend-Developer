import mongoose from "mongoose";

const tokenSchema = new mongoose.Schema({
  img: { type: String, required: true },
  tokenName: { type: String, required: true },
  symbol: { type: String, required: true },
  decimals: { type: Number, required: true },
  marketcap: { type: Number, required: true },
  chain: { type: String, required: true },
});

const TokenModel =
  mongoose.models.tokens || mongoose.model("tokens", tokenSchema);

/** START: Validators **/
TokenModel.schema.path("img").validate({
  validator: (value) => !!value,
  message: "img required",
});
TokenModel.schema.path("tokenName").validate({
  validator: (value) => !!value,
  message: "tokenname requried",
});
TokenModel.schema.path("symbol").validate({
  validator: (value) => !!value,
  message: "symbol required",
});
TokenModel.schema.path("decimals").validate({
  validator: (value) => !!value && !isNaN(parseInt(value)),
  message: "decimal must be a number",
});
TokenModel.schema.path("marketcap").validate({
  validator: (value) => !!value && !isNaN(parseInt(value)),
  message: "marketcap must be a number",
});
TokenModel.schema.path("chain").validate({
  validator: (value) => !!value,
  message: "chain required",
});
/** END: Validators **/

export { TokenModel };
