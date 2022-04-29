const { Model, DataTypes, Sequelize } = require('sequelize');

const USER_TABLE = 'users';

const UserSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  passwordHash: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'password_hash',
  },
  password_plain: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'password_plain',
  },
  superadmin: {
    allowNull: true,
    type: DataTypes.BOOLEAN,
    field: 'superadmin',
  },
  shopName: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'password_plain',
  },
  remeberToken: {
    allowNull: true,
    type: DataTypes.STRING(100),
    field: 'remeber_token',
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW,
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'update_at',
  },
  cardBrand: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'card_brand',
  },
  cardLastFour: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'card_last_four',
  },
  trialEndsAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'trial_ends_at',
  },
  shopDomain: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'shop_domain',
  },
  isEnabled: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    field: 'is_enabled',
  },
  billingPlan: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'billing_plan',
  },
  trialStartsAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'trial_starts_at',
  },
};

class User extends Model {
  static associate() {}

  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps: false,
    };
  }
}

module.exports = { USER_TABLE, UserSchema, User };
