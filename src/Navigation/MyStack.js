import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import Login from '../Screens/Login/Login';
import Main from '../Screens/Main/Main';
//import Set from '../Screens/Dashboard/Dashboard';
import Home from '../Screens/Home/Home';
import CvvView from '../Screens/CvvView/CvvView';
import CvvUpload from '../Screens/CvvUpload/CvvUpload';
import CvvUpdate from '../Screens/CvvUpload/CvvUpdate/CvvUpdate';
import Dashboard from '../Screens/Dashboard/Dashboard';
import RegEmp from '../Screens/RegEmp/RegEmp';
import EmpList from '../Screens/EmpList/EmpList';
import EmpView from '../Screens/EmpView/EmpView';
import JobDesc from '../Screens/JobDesc/JobDesc';
//import CvvView1 from '../Screens/CvvView1/CvvView1';
//import Main1 from '../Screens/Main1/Main1';
import Mein from '../Screens/Mein/Mein';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerRoute = () => {
  return(
    <Drawer.Navigator initialRouteName='Candidates List'>
    <Drawer.Screen name="Candidates List" component={Main} />
    <Drawer.Screen name="Add Candidate" component={CvvUpload} />
    <Drawer.Screen name="Dashboard" component={Dashboard} />
    <Drawer.Screen name="Employee List" component={EmpList} />
    <Drawer.Screen name="Job Description" component={JobDesc} />
    <Drawer.Screen name="Create Employee" component={RegEmp} />
    </Drawer.Navigator>
    
  );
};

const MyStack = () => {
  return (
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Login" component={Login}
         options={{
          title: 'Login',
          headerTitleStyle: {
            color: '#fff',
            fontWeight:'bold',
            fontSize:20,
            alignSelf:'center',
            //justifyContent:'center'
          },
          headerStyle: {
            backgroundColor: 'blue'
          },
        }}
        />
        <Stack.Screen name="Mein" component={Mein}
        options={{
          title: 'Candidates List',
          headerTitleStyle: {
            color: '#fff',
            fontWeight:'bold',
            fontSize:20,
            alignItems:'center'
          },
          headerStyle: {
            backgroundColor: 'blue',
          },
        }}
        />
       
        <Stack.Screen name="Main" component={DrawerRoute}
        options={{
          title: 'Candidates List',
          headerTitleStyle: {
            color: '#fff',
            fontWeight:'bold',
            fontSize:20,
            alignItems:'center'
          },
          headerStyle: {
            backgroundColor: 'blue',
          },
        }}
        />
        <Stack.Screen name="Candidate Register" component={Home} />
        <Stack.Screen name="CvvView" component={CvvView} 
         options={{
          title: 'Candidate Details',
          headerTitleStyle: {
            color: 'white',
          },
          headerStyle: {
            backgroundColor: 'mediumblue',
          },
        }}
        />
        <Stack.Screen name="CvvUpload" component={CvvUpload} 
         options={{
          title: 'CvvUpload',
          headerTitleStyle: {
            color: '#fff',
          },
          headerStyle: {
            backgroundColor: 'royalblue',
          },
        }}
        />
        <Stack.Screen name="CvvUpdate" component={CvvUpdate} 
         options={{
          title: 'CvvUpdate',
          headerTitleStyle: {
            color: '#fff',
          },
          headerStyle: {
            backgroundColor: 'royalblue',
          },
        }}
        />
        <Stack.Screen name="Dash Board" component={Dashboard} 
         options={{
          title: 'Dash Board',
          headerTitleStyle: {
            color: '#fff',
          },
          headerStyle: {
            backgroundColor: 'royalblue',
          },
        }}
        />
        <Stack.Screen name="RegEmp" component={RegEmp}
        options={{
          title: 'Create Employee',
          headerTitleStyle: {
            color: '#fff',
            fontWeight:'bold',
            fontSize:20,
            alignItems:'center'
          },
          headerStyle: {
            backgroundColor: 'royalblue',
          },
        }}
        />
        <Stack.Screen name="EmpView" component={EmpView} 
         options={{
          title: 'Emp Details',
          headerTitleStyle: {
            color: 'white',
          },
          headerStyle: {
            backgroundColor: 'green',
          },
        }}
        />
        <Stack.Screen name="JobDesc" component={JobDesc}
        options={{
          title: 'Create Job Description',
          headerTitleStyle: {
            color: '#fff',
            fontWeight:'bold',
            fontSize:20,
            alignItems:'center'
          },
          headerStyle: {
            backgroundColor: 'royalblue',
          },
        }}
        />
        
      </Stack.Navigator>
  );
};

export default MyStack;