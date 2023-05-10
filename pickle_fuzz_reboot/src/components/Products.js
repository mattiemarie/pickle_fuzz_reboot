import React from 'react';
import { Card, CardBody, CardFooter, Text, Image, Stack, Heading, Button, ButtonGroup } from '@chakra-ui/react'
import woohoo from './images/woohoo.jpg';


function Products () {
  return (
  <div className='container'>

    {/* Heading of Section -- Projects
    <div className='heading-container'>
      <h1>Products</h1>
    </div>    */}
    
    <div className= 'card-container'>

        {/* Woohoo Wall Hanging */}
        <Card maxW='sm'>
        <CardBody>
            <Image
            src={woohoo}
            alt='Woohoo Wall Hanging'
            borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
            <Heading size='md'>Woohoo! Wall Hanging</Heading>
            <Text>
                Cute Clowny Face 10” X 12” Mirror Wall Hang
            </Text>
            </Stack>
            </CardBody>
            <CardFooter>
                <ButtonGroup spacing='2'>
                <Text color='blue.600' fontSize='2xl'>
                $60
                </Text>
                <Button variant='ghost' colorScheme='blue'>
                    Add to cart
                </Button>
                </ButtonGroup>
            </CardFooter>
            </Card>

        {/* Woohoo Wall Hanging */}
        <Card maxW='sm'>
        <CardBody>
            <Image
            src={woohoo}
            alt='Woohoo Wall Hanging'
            borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
            <Heading size='md'>Woohoo! Wall Hanging</Heading>
            <Text>
                Cute Clowny Face 10” X 12” Mirror Wall Hang
            </Text>
            </Stack>
            </CardBody>
            <CardFooter>
                <ButtonGroup spacing='2'>
                <Text color='blue.600' fontSize='2xl'>
                $60
                </Text>
                <Button variant='ghost' colorScheme='blue'>
                    Add to cart
                </Button>
                </ButtonGroup>
            </CardFooter>
            </Card>

    </div>
  </div>
  );
}

export default Products;
