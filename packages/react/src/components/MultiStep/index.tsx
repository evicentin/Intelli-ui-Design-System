import { Label, MultiStepContainer, Step, Steps } from './styles';

export interface MultiStepProps {
  size: number;
  stepText: string;
  ofText: string;
  currentStep?: number;
}

export function MultiStep({
  size,
  stepText = 'Step',
  ofText = 'of',
  currentStep = 1,
}: MultiStepProps) {
  return (
    <MultiStepContainer>
      <Label>
        {stepText} {currentStep} {ofText} {size}
      </Label>

      <Steps css={{ '--steps-size': size }}>
        {Array.from({ length: size }, (_, i) => i + 1).map((step) => {
          return <Step key={step} active={currentStep >= step} />;
        })}
      </Steps>
    </MultiStepContainer>
  );
}

MultiStep.displayName = 'MultiStep';
