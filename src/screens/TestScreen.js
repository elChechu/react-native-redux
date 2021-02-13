import React from 'react'
import { SafeAreaView, Button } from 'react-native'
import {connect} from 'react-redux'
import {onFetchEmployes, onFetchEmployesById, onFetchProduct} from '../redux'

const _TestScren = (props) => {

    const { userReducer, onFetchEmployes, onFetchEmployesById, onFetchProduct } = props;
    
     const {employes, employesbyid, products} = userReducer;
     console.log(employes)    
     console.log(employesbyid)    
     console.log(products)    

    return (
        <SafeAreaView tyle={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>

            <Button style={{width: 50, height: 50, backgroundColor: 'steelblue'}} title="Ver Empleados" onPress={() => onFetchEmployes() } />
            <Button style={{width: 50, height: 50, backgroundColor: 'steelblue'}} title="Ver Empleado 2" onPress={() => onFetchEmployesById(2) } />
            <Button style={{width: 50, height: 50, backgroundColor: 'steelblue'}} title="Ver Productos" onPress={() => onFetchProduct() } />

        </SafeAreaView>
    )
}

const mapStateToProps = (state) => ({
    userReducer: state.userReducer
})

const TestScren = connect(mapStateToProps, {onFetchEmployes, onFetchEmployesById, onFetchProduct})(_TestScren)

export { TestScren };