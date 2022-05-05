import {
  Text,
  View,
  Image,
  ScrollView,
  ImageBackground,
  Button,
  Alert,
} from "react-native";
import React from "react";
import { useState, useEffect } from "react";
import styles from "./Style.js";
import * as Location from "expo-location";
import moment from "moment";
import "moment/locale/fr";

export default function App() {
  const [data, setData] = useState({});
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [fiveDays, setFiveDays] = useState([]);

  const weatherLogo = `https://api.openweathermap.org/img/w/${data?.weather?.[0]?.icon}.png`;

  // GET INFOS FROM API
  const getInfoFromApi = () => {
    return fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${JSON.stringify(
        latitude
      )}&lon=${JSON.stringify(
        longitude
      )}&&lang=fr&units=metric&appid=0b8da696414a0424795c3f58c3ae07d9`
    )
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  };
  useEffect(() => {
    getInfoFromApi();
  }, [latitude, longitude]);

  //GEOLOCALISATION
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLongitude(location.coords.longitude);
      setLatitude(location.coords.latitude);
    })();
  }, []);

  useEffect(() => {
    console.log("actual latitude", latitude, "actual longitude", longitude);
  }, [latitude, longitude]);

  //GET WEATHER ON 5 FIVE

  const getNextFiveDays = () => {
    return fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${JSON.stringify(
        latitude
      )}&lon=${JSON.stringify(
        longitude
      )}&&lang=fr&units=metric&appid=0b8da696414a0424795c3f58c3ae07d9`
    )
      .then((res) => res.json())
      .then(
        (resObject) => {
          const fiveDays = resObject;
          setFiveDays(fiveDays);
          console.log(fiveDays);
        },
        (err) => {
          console.log(err);
        }
      );
  };

  useEffect(() => {
    // console.log("fiveDays", fiveDays);
  }, [fiveDays]);

  useEffect(() => {
    getNextFiveDays();
  }, [latitude, longitude]);

  //REFRESH BUTTON
  const refresh = () => {
    getNextFiveDays();
  };

  // AFFICHAGE
  return (
    <ScrollView style={styles.scrollView}>
      <ImageBackground
        source={require("./images/ciel.jpg")}
        style={styles.image}
      >
        <View style={[styles.container1]}>
          <View style={[styles.titleApp]}>
            <Text style={[styles.title]}>Chaîne Météo</Text>
          </View>

          <View style={[styles.dailyCity]}>
            <Text>
              <Text style={[styles.city]}></Text>
              <Text style={[styles.city]}> {data.name}</Text>
            </Text>

            <Text style={[styles.country]}>
              <Text></Text>
              <Text> {data?.sys?.country}</Text>
            </Text>
          </View>

          <View style={[styles.dailyContent]}>
            <Image
              style={styles.mainlogo}
              source={{ uri: weatherLogo }}
            ></Image>

            <Text style={[styles.temp]}>{data?.main?.temp}°C</Text>

            <Text style={[styles.content]}>
              Prévision : {data?.weather?.[0]?.description}
            </Text>
          </View>

          <View style={[styles.dailyCond]}>
            <Text style={[styles.wind]}>
              Wind speed : {data?.wind?.speed}km/h
            </Text>
          </View>

          <View style={[styles.location]}>
            <Text style={[styles.geoLoc]}>Coordonnées GPS :</Text>
            <Text style={[styles.geoLoc]}>Latitude : {latitude}</Text>
            <Text style={[styles.geoLoc]}>Longitude : {longitude}</Text>
          </View>
        </View>

        <View style={[styles.nextFiveDays]}>
          <Text style={[styles.fiveDaystitle]}>Les 5 prochains jours :</Text>

          <View style={[styles.day]}>
            <View style={[styles.fiveDays]}>
              <Text style={[styles.dayName]}>
                {moment(fiveDays?.list?.[7]?.dt_txt).format("dddd")}
              </Text>
              <Text>
                Prévision : {fiveDays?.list?.[7]?.weather?.[0]?.description}
              </Text>
              <Text>Temperature : {fiveDays?.list?.[7]?.main.temp}°C</Text>
            </View>
            <Image
              style={styles.logo}
              source={{
                uri: `https://api.openweathermap.org/img/w/${fiveDays?.list?.[7]?.weather?.[0]?.icon}.png`,
              }}
            />
          </View>

          <View style={[styles.day]}>
            <View style={[styles.fiveDays]}>
              <Text style={[styles.dayName]}>
                {moment(fiveDays?.list?.[15]?.dt_txt).format("dddd")}
              </Text>
              <Text>
                Prévision : {fiveDays?.list?.[15]?.weather?.[0]?.description}
              </Text>
              <Text>Temperature : {fiveDays?.list?.[15]?.main.temp}°C</Text>
            </View>
            <Image
              style={styles.logo}
              source={{
                uri: `https://api.openweathermap.org/img/w/${fiveDays?.list?.[15]?.weather?.[0]?.icon}.png`,
              }}
            />
          </View>

          <View style={[styles.day]}>
            <View style={[styles.fiveDays]}>
              <Text style={[styles.dayName]}>
                {moment(fiveDays?.list?.[23]?.dt_txt).format("dddd")}
              </Text>
              <Text>
                Prévision : {fiveDays?.list?.[23]?.weather?.[0]?.description}
              </Text>
              <Text>Temperature : {fiveDays?.list?.[23]?.main.temp}°C</Text>
            </View>
            <Image
              style={styles.logo}
              source={{
                uri: `https://api.openweathermap.org/img/w/${fiveDays?.list?.[23]?.weather?.[0]?.icon}.png`,
              }}
            />
          </View>

          <View style={[styles.day]}>
            <View style={[styles.fiveDays]}>
              <Text style={[styles.dayName]}>
                {moment(fiveDays?.list?.[31]?.dt_txt).format("dddd")}
              </Text>
              <Text>
                Prévision : {fiveDays?.list?.[31]?.weather?.[0]?.description}
              </Text>
              <Text>Temperature : {fiveDays?.list?.[31]?.main.temp}°C</Text>
            </View>
            <Image
              style={styles.logo}
              source={{
                uri: `https://api.openweathermap.org/img/w/${fiveDays?.list?.[31]?.weather?.[0]?.icon}.png`,
              }}
            />
          </View>

          <View style={[styles.day]}>
            <View style={[styles.fiveDays]}>
              <Text style={[styles.dayName]}>
                {moment(fiveDays?.list?.[39]?.dt_txt).format("dddd")}
              </Text>
              <Text>
                Prévision : {fiveDays?.list?.[39]?.weather?.[0]?.description}
              </Text>
              <Text>Temperature : {fiveDays?.list?.[39]?.main.temp}°C</Text>
            </View>
            <Image
              style={styles.logo}
              source={{
                uri: `https://api.openweathermap.org/img/w/${fiveDays?.list?.[39]?.weather?.[0]?.icon}.png`,
              }}
            />
          </View>

          <View>
            <Button
              title="Refresh Data"
              style={[styles.button]}
              onPress={() => Alert.alert("Données à jour")}
              onClick={refresh}
              color="orange"
            />
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
}
