import { Text, Title, TextInput, Button, Image } from '@mantine/core';
import image from 'public/banner-photo.svg';
import classes from './SuccessfullPaymen.module.css';

export function SuccessfulPayment() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.body}>
        <Title className={classes.title}>Congratulations !!!</Title>
        <Text fw={500} fz="lg" mb={5}>
          You have paid successfully
        </Text>
        <Text fz="sm" c="dimmed">
          You will never miss important product updates, latest news and community QA sessions. Our
          newsletter is once a week, every Sunday.
        </Text>

        <div className={classes.controls}>
          <TextInput
            placeholder="Your email"
            classNames={{ input: classes.input, root: classes.inputWrapper }}
          />
          <Button className={classes.control}>Subscribe</Button>
        </div>
      </div>
      <Image src={image.src} className={classes.image} />
    </div>
  );
}
