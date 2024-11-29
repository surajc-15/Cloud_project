import { StikyWrapper } from "@/components/sticky-wrapper";
import { FeedWrapper } from "@/components/feedwrapper";
import { Header } from "./header";
import { UserProgess } from "@/components/user-progress";
const LearnPage=()=>{
    return(
        <div className="flex flex-row-reverse gap-[48px] px-6">
            <StikyWrapper>
           <UserProgess
           activeCourse={{title:"Kannada",imageSrc:"IN - India.svg"}}
           hearts={5}
           points={100}
           hasActiveSubscription={false}
           />
            </StikyWrapper>
            <FeedWrapper>
                <Header title="Kannada"/>
            </FeedWrapper>
        </div>
    );
}
export default LearnPage;