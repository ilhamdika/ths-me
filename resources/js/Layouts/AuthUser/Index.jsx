import HeroContent from "./HeroContent";
import NavigationBar from "./NavigationBar";

export default function AuthUser ({childern}){
    return (
        <>
        <div>
            <NavigationBar/>
            <div class="section grid lg:grid-cols-2 sm:grid-cols-1">
 
            <section>
                <main>{childern}</main>
            </section>
</div>
        </div>
        </>
        
        
    )
}