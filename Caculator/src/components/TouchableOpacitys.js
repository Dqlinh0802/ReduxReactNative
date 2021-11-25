import React, {Component} from "react";
import {View, Text, TouchableOpacity} from 'react-native'
import styles from "../styles/boxNumber";
import { connect } from 'react-redux';



class TouchableOpacitys extends Component {
    
    // constructor(props){
    //     super(props);
    //     this.state={
    //         num: 0
    //     };
    //     this.clickBT = this.clickBT.bind(this);
    // }

    // clickBT() {
    //     const num = this.state;
    //     this.props.dispatch({
    //         num,
    //         type: 'TINHTOAN'
    //     });
    // }


    render(){
        return(
            <View style={{flexDirection: 'row'}}>
                    <View style={{flexDirection: 'column', width: '75%'}}>
                        <View style={{flexDirection: 'row', width: '100%'}}>
                            <TouchableOpacity style={[styles.box, {backgroundColor: '#c24444'}]}>
                                <Text style={styles.num}>C</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.box, {backgroundColor: '#DCA394'}]}>
                                <Text style={styles.num}>X</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.box, {backgroundColor: '#DCA394'}]}>
                                <Text style={styles.num}>/</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <TouchableOpacity style={styles.box}>
                                <Text style={styles.num}>7</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.box}>
                                <Text style={styles.num}>8</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.box}>
                                <Text style={styles.num}>9</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <TouchableOpacity style={styles.box}>
                                <Text style={styles.num}>4</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.box}>
                                <Text style={styles.num}>5</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.box}>
                                <Text style={styles.num}>6</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <TouchableOpacity style={styles.box}>
                                <Text style={styles.num}>1</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.box}>
                                <Text style={styles.num}>2</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.box}>
                                <Text style={styles.num}>3</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <TouchableOpacity style={[styles.box, {width: '62%', marginRight: 6, marginLeft: 6, backgroundColor: '#25587a'}]}>
                                <Text style={styles.num}>0</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.box}>
                                <Text style={[styles.num, {fontSize: 70, lineHeight: 90}]}>.</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{flexDirection:'column', width: '25%'}}>
                        <TouchableOpacity style={[styles.box, {width: '90%', backgroundColor: '#c24444'}]}>
                            <Text style={styles.num}>Xóa</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.box, {width: '90%', backgroundColor: '#DCA394'}]}>
                            <Text style={styles.num}>-</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.box, {width: '90%', backgroundColor: '#DCA394'}]}>
                            <Text style={styles.num}>+</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.box, {width: '90%', height: 200, backgroundColor: '#cf7961' }]}>
                            <Text style={[styles.num, 
                                {lineHeight: 200, height: 200, fontSize: 45}]}>
                                =
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
        )
    }
}
export default connect()(TouchableOpacitys);