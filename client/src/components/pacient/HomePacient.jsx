import React from "react";
import { useEffect } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  getPacients,
  putPacient,
  deletePacient,
} from "../../slices/pacientsActions";
import theme from "../../theme";
import { CardPacient } from "./CardPacient";

export function HomePacient({ navigation }) {
  const pacients = useSelector((state) => state.pacients);
  const dispatch = useDispatch();

  const updated = {
    _id: "636d6d00b57f8d59fec7c2b5",
    first_name: "Valentina Maria",
    last_name: "Hormaechea",
    DNI: 1231231,
    state: "Buenos Aires",
    city: "Mar del Plata",
    postcode: "7600",
    address: "San Martin 123",
    email: "poiu@gmail.com",
    password: "poiuqwer",
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Button
            title="Formulario Usuario"
            onPress={() =>
              navigation.navigate("FormPacient", { name: "FormPacient" })
            }
          ></Button>
          <Button title="GetPacients" onPress={() => dispatch(getPacients())} />
          <Button
            title="Consultas"
            onPress={() =>
              navigation.navigate("Consultas", { name: "Consultas" })
            }
          ></Button>
          <Button
            title="updateData"
            onPress={() => dispatch(putPacient(updated._id, updated))}
          />
          <Button
            title="delete"
            onPress={() => dispatch(deletePacient(updated._id))}
          />
          <Text
            style={{ fontSize: theme.fontSize.secondaryText, paddingTop: 15 }}
          >
            Hola,
          </Text>
          <Text
            style={{
              fontSize: theme.fontSize.primaryText,
              paddingBottom: 10,
              paddingLeft: 10,
            }}
          >
            Daniela Gomez
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            similique, illo expedita et dicta ullam, voluptate animi quasi
            voluptatem, voluptates repellat deserunt dolore atque voluptatibus
            id totam sapiente a incidunt!
          </Text>
          <View style={styles.containerBtnQueries}>
            <TouchableOpacity
              title="QueriesHistorialPacientBasic"
              onPress={() =>
                navigation.navigate("QueriesHistorialPacientBasic", {
                  name: "QueriesHistorialPacientBasic",
                })
              }
              style={styles.btn}
            >
              <Text style={{ textAlign: "center" }}>Consultas</Text>
            </TouchableOpacity>
          </View>
          <Text>Favoritos:</Text>
          <CardPacient />
        </View>
        <View style={styles.containerComments}>
          <Text style={{ textAlign: "center" }}>
            CARRUSEL DE LA CONTRATACION
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
  },
  containerBtnQueries: {
    alignItems: "center",
    padding: 100,
  },
  btn: {
    backgroundColor: theme.colors.primaryColor,
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: theme.borderRadius.borderRadiusBotton,
  },
  containerComments: {
    width: "100%",
    height: 300,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    borderRadius: 10,
    marginVertical: 40,
    justifyContent: "center",
    paddingBottom: 40,
  },
});
