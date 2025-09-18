'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useRouter } from 'next/navigation';
import {
  Database,
  Shield,
  Workflow,
  Globe,
  BarChart3,
  Settings,
  Zap,
  Users,
  CheckCircle,
} from 'lucide-react';

export default function Features() {
  const router = useRouter();

  // ACTION_PLACEHOLDER_START
  const handlePrimaryAction = () => {
    router.push('/');
  };
  const handleSecondaryAction = () => {
    router.push('/');
  };
  // ACTION_PLACEHOLDER_END

  const features = [
    {
      icon: Database,
      title: 'SAP S/4HANA Integration',
      description:
        'Seamless integration with SAP S/4HANA Cloud and on-premise systems with real-time data synchronization.',
      badge: 'Core ERP',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description:
        'SOC 2 Type II compliant with end-to-end encryption and role-based access controls for sensitive business data.',
      badge: 'Security',
    },
    {
      icon: Workflow,
      title: 'Process Automation',
      description:
        'Automate procurement, finance, and HR workflows with intelligent business process orchestration.',
      badge: 'Automation',
    },
    {
      icon: Globe,
      title: 'Multi-System Connectivity',
      description:
        'Connect SAP with Salesforce, Microsoft 365, Oracle, and 200+ enterprise applications seamlessly.',
      badge: 'Integration',
    },
    {
      icon: BarChart3,
      title: 'Real-Time Analytics',
      description:
        'Live dashboards and KPI monitoring with SAP Analytics Cloud integration for data-driven decisions.',
      badge: 'Analytics',
    },
    {
      icon: Settings,
      title: 'Custom API Development',
      description:
        'Bespoke REST and OData APIs tailored to your business requirements with comprehensive documentation.',
      badge: 'Development',
    },
    {
      icon: Zap,
      title: 'High-Performance Processing',
      description:
        'Process millions of transactions per hour with optimized ABAP code and in-memory computing.',
      badge: 'Performance',
    },
    {
      icon: Users,
      title: 'Expert SAP Consultants',
      description:
        'Certified SAP architects and developers with 15+ years experience in enterprise implementations.',
      badge: 'Expertise',
    },
    {
      icon: CheckCircle,
      title: '99.9% Uptime SLA',
      description:
        'Mission-critical reliability with automated failover, disaster recovery, and 24/7 system monitoring.',
      badge: 'Reliability',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Enterprise Capabilities
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Complete SAP ERP
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Integration Platform
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Transform your business operations with our comprehensive SAP integration solutions,
            designed for Fortune 500 companies and growing enterprises.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">Ready to modernize your SAP infrastructure?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handlePrimaryAction}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Schedule SAP Assessment
            </button>
            <button
              onClick={handleSecondaryAction}
              className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors"
            >
              View Integration Portfolio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
