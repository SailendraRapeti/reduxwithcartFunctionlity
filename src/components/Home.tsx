import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addCart } from './redux/Slice'
interface IProps {
    addCart:  (data: CartData) => void;
    cartList: CartData;
}
interface Istate {
    array:CartData[]
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
    quntity: number;
  }
const mapStateToProps = (state: { cartList: {cartList: CartData} }) => ({
    cartList: state.cartList.cartList,
});
const mapDispatch = {
    addCart,
};

const connector = connect(mapStateToProps, mapDispatch);
class Home extends Component<IProps,Istate> {
    state = {
        array: []
    }
    componentDidMount(): void {
        this.getData()
    }
    getData = async () => {
        const data = await fetch("https://dummyjson.com/products")
        const response = await data.json()
        this.setState({ array: response.products })
    }
    onPressAddCratBtn = (id: number) => {
        const filteredItem = this.state.array.filter(
            (each: CartData) => each.id === id,
        );
      
        this.props.addCart(filteredItem[0]);
    };
    render() {
        const { array } = this.state
        const sai = this.props.cartList
        

        return (
            <View style={styles.container}>
                <FlatList data={array}
                 renderItem={({ item }:{item:CartData}) =>{
                    return(
                        <View style={styles.card}>
                        <Image style={{ height: 40, width: 100 }} source={{ uri: `${item.thumbnail}` }} />
                        <View>
                        <Text>{item.title}</Text>
                        <TouchableOpacity onPress={() => this.onPressAddCratBtn(item.id)}>
                            <Text style={{fontWeight:"bold"}}>add to card</Text>
                        </TouchableOpacity>
                        </View>
                    </View>
                    )
                }
                  
                } />

            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    card:{
        display:"flex",
        flexDirection:"row",
        padding:10,
        gap:10
    },
    
})
export default connector(Home)