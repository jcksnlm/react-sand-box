import './App.css'
import { Greet } from './components/props/Greet'
import { Person } from './components/props/Person'
import { PersonList } from './components/props/PersonList'
import { Status } from './components/props/Status'
import { Heading } from './components/props/Heading'
import { Oscar } from './components/props/Oscar'
import { Button } from './components/props/Button'
import { Input } from './components/props/Input'
import { Container } from './components/props/Container'
import { ThemeContextProvider } from './components/context/ThemeContext'
import { Box } from './components/context/Box'
import { UserContextProvider } from './components/context/UserContext'
import { User } from './components/context/User'
import { DomRef } from './components/refs/DomRef'
import { MutableRef } from './components/refs/MutableRef'
import { Private } from './components/auth/Private'
import { Profile } from './components/auth/Profile'
// import { Counter } from './components/class/Counter'
// import { List } from './components/generics/List'
import { Toast } from './components/templateliterals/Toast'
import { CustomButton } from './components/html/Button'
import { RandomNumber } from './components/restriction/RandomNumber'
import { Text } from './components/polymorphic/Text'

function App() {
  const personName = {
      first: 'Bruce',
      last: 'Wayne'
  }

  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne'
    },
    {
      first: 'Clark',
      last: 'Kent'
    },
    {
      first: 'Princess',
      last: 'Diana'
    }
  ]

  return (
    <div className='App'>
      <Greet name='joselph' isLoggedIn={true}/>
      <Person name={personName}/>
      <PersonList names={nameList} />
      <Status status='loading' />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Dicaprio</Heading>
      </Oscar>
      <Button
        handleClick={(event, id) => {
          alert('Button clicked' + event + id)
        }}
      />
      <Input value='' handleChange={event => console.log(event)} />
      <Container styles={{ border: '1px solid black', padding: '1rem' }} />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <UserContextProvider>
        <User />
      </UserContextProvider>
      <DomRef />
      <MutableRef />
      <Private isLoggedIn={true} component={Profile}></Private>
      {/* <Counter message='The count value is ' /> */}
      {/* <List
        items={['Batman', 'Superman', 'Wonder Woman']}
        onClick={item => alert(item)}
      />
      <List items={[1, 2, 3]} onClick={item => console.log(item)} /> */}
      {/* <List
        items={[
          {
            id: 1,
            first: 'Bruce',
            last: 'Wayne'
          },
          {
            id: 2,
            first: 'Clark',
            last: 'Kent'
          },
          {
            id: 3,
            first: 'Princess',
            last: 'Diana'
          }
        ]}
        onClick={item => console.log(item)}
      /> */}
      <Toast position='center' />
      <CustomButton variant='primary' onClick={() => console.log('Clicked')}>
        Button Label
      </CustomButton>
      <RandomNumber value={10} isPositive/>
      <Text as='h1' size='lg'>
        Heading
      </Text>
      <Text as='p' size='md'>
        Paragraph
      </Text>
      <Text as='label' size='sm' color='secondary' htmlFor="someId">
        Label
      </Text> 
    </div>
  )
}

export default App
