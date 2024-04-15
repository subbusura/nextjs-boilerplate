import {
  Document,
  Model,
  Schema,
  model,
  models,
  Types,
  ObjectId,
} from "mongoose";

interface ISetting extends Document {
  setting_category: Schema.Types.String;
  setting_key: Schema.Types.String;
  setting_value: Schema.Types.Mixed;
  value_type: Schema.Types.String;
  is_private: Schema.Types.Boolean;
  is_core_setting: Schema.Types.Boolean;
}

type SettingModel = Model<ISetting>;

const SettingModelSchema = new Schema<ISetting, SettingModel>({
  type: { type: Schema.Types.String },
  setting_category: { type: Schema.Types.String },
  setting_key: { type: Schema.Types.String },
  setting_value: { type: Schema.Types.Mixed },
  value_type: { type: Schema.Types.String },
  is_private: { type: Schema.Types.Boolean },
  is_core_setting: { type: Schema.Types.Boolean },
});

export default models.setting || model<ISetting>("setting", SettingModelSchema);
