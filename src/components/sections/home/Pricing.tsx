'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Zap, Shield, Clock, Users } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';

export default function Pricing() {
  const router = useRouter();

  // ACTION_PLACEHOLDER_START
  const handlePrimaryAction = () => {
    router.push('/');
  };
  const handleSecondaryAction = () => {
    router.push('/');
  };
  const handleEnterpriseContact = () => {
    router.push('/');
  };
  const handleScheduleDemo = () => {
    router.push('/');
  };
  // ACTION_PLACEHOLDER_END

  const plans = [
    {
      name: 'SAP Essentials',
      description: 'Perfect for small businesses starting their SAP journey',
      price: '$2,500',
      period: '/month',
      badge: null,
      features: [
        'SAP Business One integration',
        'Basic financial modules setup',
        'Email support (48h response)',
        'Monthly system health check',
        'Standard reporting templates',
        'Up to 10 user licenses',
      ],
      cta: 'Start Integration',
      popular: false,
      icon: <Shield className="size-5 text-primary" />,
    },
    {
      name: 'SAP Professional',
      description: 'Comprehensive solution for growing enterprises',
      price: '$8,500',
      period: '/month',
      badge: 'Most Popular',
      features: [
        'Full SAP S/4HANA implementation',
        'Custom module development',
        '24/7 priority support',
        'Real-time system monitoring',
        'Advanced analytics & BI',
        'Unlimited user licenses',
        'API integrations included',
        'Quarterly optimization reviews',
      ],
      cta: 'Deploy SAP Solution',
      popular: true,
      icon: <Zap className="size-5 text-primary" />,
    },
    {
      name: 'Enterprise Suite',
      description: 'Complete SAP ecosystem for large corporations',
      price: 'Custom',
      period: '',
      badge: 'White Glove Service',
      features: [
        'Multi-site SAP deployment',
        'Legacy system migration',
        'Dedicated solution architect',
        'Custom workflow automation',
        'Advanced security compliance',
        'SLA with 99.9% uptime guarantee',
        'On-site training programs',
        '24/7 dedicated support team',
      ],
      cta: 'Discuss Requirements',
      popular: false,
      icon: <Users className="size-5 text-primary" />,
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            <Clock className="size-3 mr-2" />
            SAP Integration Packages
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Transparent SAP
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Integration Pricing
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Choose the right SAP integration package for your business needs. All plans include
            implementation, training, and ongoing support.
          </p>

          {/* Implementation Timeline */}
          <div className="inline-flex items-center p-1 bg-muted rounded-lg">
            <button className="px-4 py-2 text-sm font-medium bg-background text-foreground rounded-md shadow-sm">
              Standard Timeline
            </button>
            <button className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Fast Track
              <Badge variant="secondary" className="ml-2 text-xs">
                -30% Time
              </Badge>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={cn(
                'relative overflow-hidden transition-all duration-300 hover:shadow-lg',
                plan.popular
                  ? 'border-primary/50 shadow-lg shadow-primary/10 scale-105'
                  : 'border-border/50 hover:border-primary/20'
              )}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">
                    <Star className="size-3 mr-1" />
                    {plan.badge}
                  </Badge>
                </div>
              )}

              {/* Background Gradient */}
              {plan.popular && (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
              )}

              <CardHeader className="relative text-center pb-8">
                {plan.badge && !plan.popular && (
                  <Badge variant="outline" className="mb-4 mx-auto w-fit">
                    {plan.badge}
                  </Badge>
                )}

                <div className="flex justify-center mb-4">{plan.icon}</div>

                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <CardDescription className="text-base mb-6">{plan.description}</CardDescription>

                <div className="flex items-end justify-center gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground mb-1">{plan.period}</span>}
                </div>
              </CardHeader>

              <CardContent className="relative space-y-6">
                {/* Features List */}
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="size-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="size-3 text-primary" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  onClick={
                    plan.name === 'Enterprise Suite' ? handleEnterpriseContact : handlePrimaryAction
                  }
                  className={cn(
                    'w-full text-base py-6',
                    plan.popular ? 'bg-primary hover:bg-primary/90' : ''
                  )}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.popular && <Zap className="size-4 mr-2" />}
                  {plan.cta}
                </Button>

                {plan.name === 'SAP Professional' && (
                  <p className="text-center text-sm text-muted-foreground">
                    Free consultation • Implementation roadmap included
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16 max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold mb-4">Need a custom SAP integration strategy?</h3>
          <p className="text-muted-foreground mb-6">
            Every business has unique requirements. Our SAP experts will analyze your current
            systems and design a tailored integration approach that maximizes ROI.
          </p>
          <Button onClick={handleScheduleDemo} variant="outline" size="lg">
            Schedule SAP Assessment
          </Button>
        </div>
      </div>
    </section>
  );
}
