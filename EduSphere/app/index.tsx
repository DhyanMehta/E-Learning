import { Link } from "expo-router"
import { View } from "react-native"

const index =  ()=>{

  return(
    <View>
      <text>
        Hello Welcome to my app
      </text>
      <Link href={"/about"}>
      go to about page</Link>
    </View>
  )

}
export default index