<template>
  <div class="home">
    <div
      class="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
      role="alert"
    >
      <span class="font-medium">Wellcome !</span> {{ user.email }}
    </div>
    <div class="hello relative" ref="chartdiv">
      <div class="test absolute bottom-0 left-0 h-24 w-24 z-40"></div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";

export default {
  data() {
    return {
      dataLocations: {
        0: {
          name: "Paris",
          lat: 48.86666667,
          lng: 2.333333333,
          color: "violet",
          url: "http://www.flickr.com/photos/wlappe/2903363114/sizes/l/in/photostream/",
          img: "paris",
        },
        1: {
          name: "Shanghai",
          lat: 31.1,
          lng: 121.366,
          color: "black",
          url: "http://www.flickr.com/photos/mulliganstu/8258009156/sizes/k/in/photostream/",
          img: "shanghai",
        },
        2: {
          name: "New York",
          lat: 40.7,
          lng: -73.9,
          color: "red",
          url: "http://www.flickr.com/photos/29624656@N08/3735314426/sizes/l/in/photostream/",
          img: "newyork",
        },
        3: {
          name: "Los Angeles",
          lat: 34.0,
          lng: -118.25,
          color: "purple",
          img: "losangeles",
          url: "http://www.flickr.com/photos/ahhdrjones/2233960320/sizes/l/in/photostream/",
        },
        4: {
          name: "Cape Town",
          lat: -35.916,
          lng: 18.36,
          color: "hotpink",
          img: "capetown",
          url: "http://www.flickr.com/photos/eguidetravel/6398495943/sizes/o/in/photostream/",
        },
        5: {
          name: "Bandung",
          lat: -33.45,
          lng: -70.66,
          color: "blue",
          img: "santiago",
          url: "http://www.flickr.com/photos/leonardodasilva/7842929988/sizes/o/in/photostream/",
        },
        6: {
          name: "Cairo",
          lat: 30.05,
          lng: 31.25,
          color: "green",
          img: "cairo",
          url: "http://www.flickr.com/photos/azwegers/6201079985/sizes/o/in/photostream/",
        },
        7: {
          name: "Singapore",
          lat: 1.3,
          lng: 103.83,
          color: "orange",
          img: "singapore",
          url: "http://www.flickr.com/photos/jjcbaron/5072266832/sizes/l/in/photostream/",
        },
      },
    };
  },
  computed: {
    ...mapState("user", ["user"]),
  },
  mounted() {
    // Create root and chart
    let root = am5.Root.new(this.$refs.chartdiv);
    let chart = root.container.children.push(
      am5map.MapChart.new(root, {
        panX: false,
        panY: false,
        maxZoomLevel: 1,
        projection: am5map.geoNaturalEarth1(),
      })
    );

    // Create polygon series
    let polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow,
        exclude: ["AQ"],
      })
    );

    polygonSeries.set("fill", am5.color("#cccccc"));

    // var cities = {
    //   type: "FeatureCollection",
    //   features: [
    //     {
    //       type: "Feature",
    //       properties: {
    //         name: "New York City",
    //       },
    //       geometry: {
    //         type: "Point",
    //         coordinates: [-73.778137, 40.641312],
    //       },
    //       pictureSettings: {
    //         src: "https://www.amcharts.com/wp-content/uploads/assets/weather/animated/rainy-1.svg",
    //         width: 50,
    //         height: 50,
    //         centerX: am5.p50,
    //         centerY: am5.p50
    //       },
    //     },
    //     {
    //       type: "Feature",
    //       properties: {
    //         name: "London",
    //       },
    //       geometry: {
    //         type: "Point",
    //         coordinates: [-0.454296, 51.47002],
    //       },
    //       pictureSettings: {
    //         src: "https://www.amcharts.com/wp-content/uploads/assets/weather/animated/rainy-1.svg",
    //         width: 50,
    //         height: 50,
    //         centerX: am5.p50,
    //         centerY: am5.p50
    //       },
    //     },
    //     {
    //       type: "Feature",
    //       properties: {
    //         name: "Beijing ",
    //       },
    //       geometry: {
    //         type: "Point",
    //         coordinates: [116.597504, 40.072498],
    //       },
    //       pictureSettings: {
    //         src: "https://www.amcharts.com/wp-content/uploads/assets/weather/animated/rainy-1.svg",
    //         width: 50,
    //         height: 50,
    //         centerX: am5.p50,
    //         centerY: am5.p50
    //       },
    //     },
    //   ],
    // };

    let pointSeries = chart.series.push(am5map.MapPointSeries.new(root, {}));

    pointSeries.bullets.push(function () {
      return am5.Bullet.new(root, {
        sprite: am5.Picture.new(root, {
          templateField: "pictureSettings",
          width: 50,
          height: 50,
          centerX: am5.p50,
          centerY: am5.p50,
          tooltipText: "{name}",
          tooltipX: am5.p50,
          tooltipY: am5.p0,
          fill: am5.color("#000000"),
        }),
      });
    });


    pointSeries.data.setAll([{
      geometry: { type: "Point", coordinates: [-3.703790, 40.416775] },
      pictureSettings: {
        src: "/img/icons/mark.svg",
      },
      name: "Madrid"
    },
    {
      // add geomtry of jakarta
      geometry: { type: "Point", coordinates: [106.845599, -6.208763] },
      pictureSettings: {
        src: "/img/icons/mark.svg",
      },
      name: "Jakarta"
    },
    {
      // add geometry of arab saudi
      geometry: { type: "Point", coordinates: [45.079162, 23.885942] },
      pictureSettings: {
        src: "/img/icons/mark.svg",
      },
      name: "Arab Saudi"
    }
    ])

  },
};
</script>

<style>
.hello {
  width: 100%;
  height: 500px;
}
.test {
  background-color: rgb(241 245 249 / var(--tw-bg-opacity));
}
</style>
