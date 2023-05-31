import React from 'react';
import { Card, CardBody, CardFooter, Text, Image, Stack, Heading, Button } from '@chakra-ui/react'
import woohoo from './images/woohoo.jpg';
import cloudy_front from './images/cloudy_front.jpg';
import devil_front from './images/devil_front.jpg';
import flames_front from './images/flames_front.jpg';
import froggy_front from './images/froggy_front.jpg';
import greeny from './images/greeny.jpg'
import pickle_mirror from './images/pickle_mirror.jpg';
import strawberry_front from './images/strawberry_front.jpg';
import cow_bag_front from './images/cow_bag_front.jpg';


function Products () {
  return (
  <div className='products-container'>
    <div className='products-heading'>Products</div>
        
    <div className= 'card-container'>

      {/* Woohoo Wall Hanging */}
      <Card className='product-card' maxW='sm'>
        <CardBody className='product-card-body'>
          <Image
            className='product-image'
            src={woohoo}
            alt='Woohoo Wall Hanging'
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
          <Heading className='product-heading' size='md'>Woohoo! Wall Hanging</Heading>
          <Text className='product-text'>
            10” X 12” Needle Punch Mirror
          </Text>
          </Stack>
        </CardBody>
        <CardFooter className='product-footer'>
          <Text className='product-price'>
            $60
          </Text>
          <Button className='product-button'>
            Add to cart
          </Button>
        </CardFooter>
      </Card>

        {/* Greeny */}
      <Card className='product-card' maxW='sm'>
        <CardBody className='product-card-body'>
          <Image
            className='product-image'
            src={greeny}
            alt='Rainbow Head Beret'
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
          <Heading className='product-heading' size='md'>Greeny Wall Mirror</Heading>
          <Text className='product-text'>
            12" X 12" Needle Punch Mirror
          </Text>
          </Stack>
        </CardBody>
        <CardFooter className='product-footer'>
          <Text className='product-price'>
            $50
          </Text>
          <Button className='product-button'>
            Add to cart
          </Button>
        </CardFooter>
      </Card>

      {/* Rainbow Head */}
      <Card className='product-card' maxW='sm'>
        <CardBody className='product-card-body'>
          <Image
            className='product-image'
            src={cloudy_front}
            alt='Rainbow Head Beret'
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
          <Heading className='product-heading' size='md'>Rainbow Head Beret</Heading>
          <Text className='product-text'>
            10.5" Diameter Crochet Beret
          </Text>
          </Stack>
        </CardBody>
        <CardFooter className='product-footer'>
          <Text className='product-price'>
            $50
          </Text>
          <Button className='product-button'>
            Add to cart
          </Button>
        </CardFooter>
      </Card>

      {/* Devil Beret*/}
      <Card className='product-card' maxW='sm'>
        <CardBody className='product-card-body'>
          <Image
            className='product-image'
            src={devil_front}
            alt='Feelin Devilish Beret'
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
          <Heading className='product-heading' size='md'>Feelin' Devilish</Heading>
          <Text className='product-text'>
            11" Diameter Crochet Beret
          </Text>
          </Stack>
        </CardBody>
        <CardFooter className='product-footer'>
          <Text className='product-price'>
            $60
          </Text>
          <Button className='product-button'>
            Add to cart
          </Button>
        </CardFooter>
      </Card>

      {/* Flames Bag*/}
      <Card className='product-card' maxW='sm'>
        <CardBody className='product-card-body'>
          <Image
            className='product-image'
            src={flames_front}
            alt='Flames Bag'
            borderRadius='lg'
          />  
          <Stack mt='6' spacing='3'>
          <Heading className='product-heading' size='md'>Feelin' Devilish</Heading>
          <Text className='product-text'>
            8.5” X 6.5” X 2.5” Crochet Bag
          </Text>
          </Stack>
        </CardBody>
        <CardFooter className='product-footer'>
          <Text className='product-price'>
            $45
          </Text>
          <Button className='product-button'>
            Add to cart
          </Button>
        </CardFooter>
      </Card>

      {/* Froggy Beret */}
      <Card className='product-card' maxW='sm'>
        <CardBody className='product-card-body'>
          <Image
            className='product-image'
            src={froggy_front}
            alt='Froggy Babe'
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
          <Heading className='product-heading' size='md'>Froggy Babe</Heading>
          <Text className='product-text'>
            11" Diameter Crochet Beret
          </Text>
          </Stack>
        </CardBody>
        <CardFooter className='product-footer'>
          <Text className='product-price'>
            $45
          </Text>
          <Button className='product-button'>
            Add to cart
          </Button>
        </CardFooter>
      </Card>

      {/* Pickle Mirror */}
      <Card className='product-card' maxW='sm'>
        <CardBody className='product-card-body'>
          <Image
            className='product-image'
            src={pickle_mirror}
            alt='Pickle Mirror'
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
          <Heading className='product-heading' size='md'>Lil' Piggy</Heading>
          <Text className='product-text'>
            8.5” X 6.5” Wall Hanging Mirror
          </Text>
          </Stack>
        </CardBody>
        <CardFooter className='product-footer'>
          <Text className='product-price'>
            $35
          </Text>
          <Button className='product-button'>
            Add to cart
          </Button>
        </CardFooter>
      </Card>

      
      {/* Strawberry Beret */}
      <Card className='product-card' maxW='sm'>
        <CardBody className='product-card-body'>
          <Image
            className='product-image'
            src={strawberry_front}
            alt='Strawberry Beret'
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
          <Heading className='product-heading' size='md'>Strawberry Dreams</Heading>
          <Text className='product-text'>
            11" Diameter Crochet Beret
          </Text>
          </Stack>
        </CardBody>
        <CardFooter className='product-footer'>
          <Text className='product-price'>
            $45
          </Text>
          <Button className='product-button'>
            Add to cart
          </Button>
        </CardFooter>
      </Card>

      {/* Pink Cow Bag */}
      <Card className='product-card' maxW='sm'>
        <CardBody className='product-card-body'>
          <Image
            className='product-image'
            src={cow_bag_front}
            alt='Pink Cow Bag'
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
          <Heading className='product-heading' size='md'>Pink Cow</Heading>
          <Text className='product-text'>
            10" X 8" Crochet Cow Print Bag
          </Text>
          </Stack>
        </CardBody>
        <CardFooter className='product-footer'>
          <Text className='product-price'>
            $45
          </Text>
          <Button className='product-button'>
            Add to cart
          </Button>
        </CardFooter>
      </Card>

    </div>
  </div>
  );
}

export default Products;
