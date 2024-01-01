import { Schema } from 'mongoose';

export const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
  },
  shop_id: {
    type: Number,
  },
  profile: {
    type: Object,
  },
  shops: {
    type: [Object],
  },
  refunds: {
    type: [Object],
  },
  managed_shop: {
    type: Object,
  },
  is_active: {
    type: Boolean,
    default: true,
  },
  address: {
    type: [Object],
  },
  orders: {
    type: [Object],
  },
  wallet: {
    type: Object,
  },
  permissions: {
    type: [Object],
    required: true,
  },
},
{
  timestamps: true
}
);



// import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
// @Schema()
// export class Users {
//    @Prop()
//    name: string;
//    @Prop()
//    email: string;
//    @Prop()
//    password: string;
//    @Prop()
//    shop_id: number;
//    @Prop()
//    profile: object;
//    @Prop()
//    shops: any[];
//    @Prop()
//    refunds: any[];
//    @Prop()
//    managed_shop: object;
//    @Prop({ default: true })
//    is_active: boolean = true;
//    @Prop()
//    address: any[];
//    @Prop()
//    orders: any[];
//    @Prop()
//    wallet: object;
//    @Prop()
//    permissions: any[];
// }
// export const UsersSchema = SchemaFactory.createForClass(Users);

