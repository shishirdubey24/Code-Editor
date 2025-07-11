date 02-07-2025
page.js file deleted from app/ folder and made a new folder under app with name root with () if we dont
place () so it wont work (reason currently dont know)
2:: then insideroot/components and create page.jsx file here it will render all the componennts inside it
as like we does with app.jsx into react ..
3:: page.**_ file is very IMP for rendering the components (specific to UI)
layout._** file is used to render all the routes and routes have different structer from compoenets.
all the routes have their own layout filewhihc shows the UI their specific UI does not lie inside Components

4:: structer of route is app/ route (folder)/layout.jsx ,page.jsx the UI of specific route will be called inside its page ::> route will have 2 files 1.UI(named as layout)
2.Renerding page(page file)

Now lets move to Header.jsx file
1:: Get the User from Db //currently commented due to no knowledge
2::we are just making the UI part By copy pasting so first create div give classes then again div +classes then give logo +hover effectm (that blue box abpve right corner)

04-07-2025
usage of "user client" for client side Compo --> its must
today we worked on two files 1.ThemeSelector.js file and other is 2.LanguageSelector.js
this themeSelector file is using the structer of /Monaco folder where we will define the structer for
every part of this project
in theme file their is one button which will show the 5 options ,once user clicks that will be applied to the project. + fetaure => fetch saved preference from LC if exist
my question ::> first of all how can we show the 5 options inside one button ?? first try to think about it
then will use Dynamic logic to change this

const Theme=(){
const[isopen,setopen]=useState(false);
const[Item,setItem]=useState(null);
const handleClick=(){
setOpen(!isopen);
}
const handleTheme={
const item=event.target.id();
}
return(

    <Butoon onClick={handleClick}> DropDown </Button>
    {isopen&&

    <ul. classname="" onClick={handleTheme}>
       <li id="1">Theme1</li>    //qustion is i want to place just one listner for all of them ,how to do it ??
         <li id="2">Theme2</li>
           <li id="3">Theme3</li>
             <li id="4">Theme4</li>

    </ul.
         Item && {Theme.ID}
    }

)
}
so the answer is event bubbling , we have to place the listner on the parent and browser will tell us which of its child has been clicked

see theri is an straight question why should we give id if browser knows who has been clicked
so we use it for our comfort, we dont want to push the browser to extract the exact HTML content,it consume the time ,so we define id in each child element and then extract that id for further work.so browser knows it just from Click onwards that this is clicked ,but because we need it so we give it ID (at the time of coding)
so that at the time of extraction browser dont work much from its side it just give us iur predefined ID

now we have the id so we can change the state based on that ID ==> setItem(ID) :: {ID && }

a SMALL CORRECTION::=>
browser dont work extra its we as coder who dont want to work with exact text defined into the tag ,working with text can give you nightmares that it can change, ==> working directly with text is not recommended ,so use ID`s

React Concept Used ::=> event bubbling, capturing,delegating
1:our event runs from upwards to downwards int the Dom tree like this
{Document → html → body → div → ul → li}

2:: now event has reached from document to actual target its called ==> Target phase
3:: now it will go back in upward direction which is ==> Bubbled phase
as this bubbled phae as event reaches to the UL this Ul runs the handler attached to the event

date--07/07/2025
qstn:: how the selected theme will be applied to the Layout of app??
1:: we have to send the selected theme to the Layout of app ,by just writing  
Item && {Theme.ID} react is not going to change the background Colour of the app.

2::> we have seen that we are placing the event Listner on the parent level,to avoid
the <button onClick={() => setTheme("vs-dark")}>VS Dark</button>
<button onClick={() => setTheme("monokai")}>Monokai</button>
<button onClick={() => setTheme("solarized-dark")}>Solarized Dark</button>
repeat of listner for each theme
we have one more alternate method to write these themes with one listner. we can use map fnction ::>
3:: to use map we need [Array] so define all of your themes into one array THEME[]
and export it to the themeSelector file then here write it like this
THEME.map((t,index)=>{
// here map is doing two interesting things
//1.its adding button to each item of THEME
//2. it is applying listner for each item
//3. it is sending the clicked item to the Store() where it will be applied to the whole app

    <button onclick={setItem(t.id )}> </button>

})

date 11-07-2025::-->
we haVE editor into oue pannel and that default code also availabel into that pannel
now i have to think about the logic by which i can show default code (under visibleCode) into the editor ??
so ohow can we acheive that goal ??
it will be done by useEffect if i speak very specific it will be done by editor dependency
useEffect(()=>{

},[*****,editor]) // this editor dependency will load the default language
what i currently understood::?= we are extracting the newCode and saving it inside the editor
i dont understand the connection between the editor ofCodeStore (editor=null),onMount(having a callback)and
this useEffect with dependency of editor
goal would be for tommorow to understand this connection .first will try to decode dependency part .

GPT ::>:: Missing dependency: You need to make sure your effect runs when editor becomes defined, so you can finally setValue.

That’s it.

If you want: just think of it as “editor needs to hear about the default code once it exists.”
