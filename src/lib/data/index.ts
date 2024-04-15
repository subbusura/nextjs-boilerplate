import settingsModelSchema from "@/models/settings-model-schema";

export const getSystemSettingByKey = async (key: string, defaultValue: any) => {
  const data = await settingsModelSchema.findOne({ setting_key: key });

  if (data) {
    return {
      value_type: data.value_type,
      setting_value: data.setting_value,
    };
  }

  return {
    value_type: null,
    setting_value: defaultValue,
  };
};
