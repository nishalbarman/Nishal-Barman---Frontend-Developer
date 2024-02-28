import mongoose from "mongoose";

const tokenSchema = new mongoose.Schema({
  img: { type: String, required: true },
  tokenName: { type: String, required: true },
  symbol: { type: String, required: true },
  decimals: { type: Number, required: true },
  marketcap: { type: Number, required: true },
  chain: { type: String, required: true },
});

const roadmapSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  qYear: { type: String, required: true },
});

const productSchema = new mongoose.Schema({
  imageUrl: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
});

const TokenModel =
  mongoose.models.tokens || mongoose.model("tokens", tokenSchema);

const RoadmapModel =
  mongoose.models.roadmaps || mongoose.model("roadmaps", roadmapSchema);

const ProductModel =
  mongoose.models.products || mongoose.model("products", productSchema);

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
RoadmapModel.schema.path("title").validate({
  validator: (value) => !!value,
  message: "title required",
});
RoadmapModel.schema.path("description").validate({
  validator: (value) => !!value,
  message: "description required",
});
RoadmapModel.schema.path("qYear").validate({
  validator: (value) => !!value,
  message: "qYear required",
});
ProductModel.schema.path("title").validate({
  validator: (value) => !!value,
  message: "title required",
});
ProductModel.schema.path("description").validate({
  validator: (value) => !!value,
  message: "description required",
});
ProductModel.schema.path("imageUrl").validate({
  validator: (value) => !!value,
  message: "imageUrl required",
});
/** END: Validators **/

export { TokenModel, RoadmapModel, ProductModel };
