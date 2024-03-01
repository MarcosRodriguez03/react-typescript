### union
What is a union
    Unions allow you declare a variable that could be more than one type or more than one value 
    Example: let myVaribable: string | boolean
        let myName: "isaiah' | "jessie"

### generics 
what are generics
    Generics provide variables to type. when decalring a string array you can use string[], but if you wanted to use the built in array interface Array<> you can insert its type between the alligators Array<string>

    we will be using Generics for built in functions and types, such as the useState<> and its type 
    setActionState<>
    Example: let [name, setName] = useState<string>("")

    You can also use Generics like parameters, when creating interfaces
    Example : interface IStuff: <Generics>