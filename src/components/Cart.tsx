import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { deleteItem ,increMent,decreaseMent} from './redux/Slice';

interface IProps {
    cartList: CartData[];
    deleteItem: any;
    increMent:any,
    decreaseMent:any,

}
interface CartData {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
    quantity:number;

   
  }
const mapStateToProps = (state: { cartList: {cartList:CartData[]} }) => ({
    cartList: state.cartList.cartList,
});
const mapDispatch = {
    deleteItem,
    increMent,
    decreaseMent
    
};
const connector = connect(mapStateToProps, mapDispatch);
export class Cart extends Component<IProps>{

state = {
    qty:'',
    price:""
}
    onDelete = (id: number) => {
        this.props.deleteItem(id)

    }
    onIncrease=(id:number)=>{
        this.props.increMent(id)
    }
    onDreaseMent=(id:number)=>{
        this.props.decreaseMent(id)
    }
    render() {
      console.log(this.props.cartList) 
      let b = 0
    this.props.cartList.filter(each=>
       b = b+(each.price*each.quantity)) 
    
        return (
            <View>
                <FlatList data={this.props.cartList} renderItem={({ item }: {item:CartData}) =>
                    <View>
                        <Image style={{ height: 60, width: 100 }} source={{ uri: `${item.thumbnail}` }} />
                        <Text>quantity:{item.quantity}</Text>
                        <TouchableOpacity onPress={() => this.onDelete(item.id)}>
                            <Text>delete</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.onIncrease(item.id)} >
                            <Text>increase</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.onDreaseMent(item.id)} >
                            <Text>decrease</Text>
                        </TouchableOpacity>
                        <Text>{item.quantity*item.price}</Text>  
                    </View>
                   
                } />
                <Text>totalAmount:{b}</Text> 
            </View>
        )
    }
}
const styles = StyleSheet.create({
    card:{
        display:"flex",
        flexDirection:"row"
    }
})
export default connector(Cart)