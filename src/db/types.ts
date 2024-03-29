��e x p o r t   t y p e   J s o n   =   s t r i n g   |   n u m b e r   |   b o o l e a n   |   n u l l   |   { [ k e y :   s t r i n g ] :   J s o n   |   u n d e f i n e d }   |   J s o n [ ] ;  
  
 e x p o r t   i n t e r f a c e   D a t a b a s e   {  
     p u b l i c :   {  
         T a b l e s :   {  
             m a t c h e s :   {  
                 R o w :   {  
                     c r e a t e d _ a t :   s t r i n g ;  
                     d a t e :   s t r i n g ;  
                     d e s c r i p t i o n :   s t r i n g   |   n u l l ;  
                     i d :   n u m b e r ;  
                     l o c a t i o n :   s t r i n g   |   n u l l ;  
                     s l o t _ p r i c e :   n u m b e r ;  
                 } ;  
                 I n s e r t :   {  
                     c r e a t e d _ a t ? :   s t r i n g ;  
                     d a t e :   s t r i n g ;  
                     d e s c r i p t i o n ? :   s t r i n g   |   n u l l ;  
                     i d ? :   n u m b e r ;  
                     l o c a t i o n ? :   s t r i n g   |   n u l l ;  
                     s l o t _ p r i c e :   n u m b e r ;  
                 } ;  
                 U p d a t e :   {  
                     c r e a t e d _ a t ? :   s t r i n g ;  
                     d a t e ? :   s t r i n g ;  
                     d e s c r i p t i o n ? :   s t r i n g   |   n u l l ;  
                     i d ? :   n u m b e r ;  
                     l o c a t i o n ? :   s t r i n g   |   n u l l ;  
                     s l o t _ p r i c e ? :   n u m b e r ;  
                 } ;  
                 R e l a t i o n s h i p s :   [ ] ;  
             } ;  
             s l o t s :   {  
                 R o w :   {  
                     c r e a t e d _ a t :   s t r i n g ;  
                     i d :   n u m b e r ;  
                     m a t c h :   n u m b e r   |   n u l l ;  
                     n a m e :   s t r i n g   |   n u l l ;  
                 } ;  
                 I n s e r t :   {  
                     c r e a t e d _ a t ? :   s t r i n g ;  
                     i d ? :   n u m b e r ;  
                     m a t c h ? :   n u m b e r   |   n u l l ;  
                     n a m e ? :   s t r i n g   |   n u l l ;  
                 } ;  
                 U p d a t e :   {  
                     c r e a t e d _ a t ? :   s t r i n g ;  
                     i d ? :   n u m b e r ;  
                     m a t c h ? :   n u m b e r   |   n u l l ;  
                     n a m e ? :   s t r i n g   |   n u l l ;  
                 } ;  
                 R e l a t i o n s h i p s :   [  
                     {  
                         f o r e i g n K e y N a m e :   " s l o t s _ m a t c h _ f k e y " ;  
                         c o l u m n s :   [ " m a t c h " ] ;  
                         i s O n e T o O n e :   f a l s e ;  
                         r e f e r e n c e d R e l a t i o n :   " m a t c h e s " ;  
                         r e f e r e n c e d C o l u m n s :   [ " i d " ] ;  
                     } ,  
                 ] ;  
             } ;  
         } ;  
         V i e w s :   {  
             [ _   i n   n e v e r ] :   n e v e r ;  
         } ;  
         F u n c t i o n s :   {  
             [ _   i n   n e v e r ] :   n e v e r ;  
         } ;  
         E n u m s :   {  
             [ _   i n   n e v e r ] :   n e v e r ;  
         } ;  
         C o m p o s i t e T y p e s :   {  
             [ _   i n   n e v e r ] :   n e v e r ;  
         } ;  
     } ;  
 }  
  
 e x p o r t   t y p e   T a b l e s <  
     P u b l i c T a b l e N a m e O r O p t i o n s   e x t e n d s  
         |   k e y o f   ( D a t a b a s e [ " p u b l i c " ] [ " T a b l e s " ]   &   D a t a b a s e [ " p u b l i c " ] [ " V i e w s " ] )  
         |   { s c h e m a :   k e y o f   D a t a b a s e } ,  
     T a b l e N a m e   e x t e n d s   P u b l i c T a b l e N a m e O r O p t i o n s   e x t e n d s   { s c h e m a :   k e y o f   D a t a b a s e }  
         ?   k e y o f   ( D a t a b a s e [ P u b l i c T a b l e N a m e O r O p t i o n s [ " s c h e m a " ] ] [ " T a b l e s " ]   &  
                 D a t a b a s e [ P u b l i c T a b l e N a m e O r O p t i o n s [ " s c h e m a " ] ] [ " V i e w s " ] )  
         :   n e v e r   =   n e v e r ,  
 >   =   P u b l i c T a b l e N a m e O r O p t i o n s   e x t e n d s   { s c h e m a :   k e y o f   D a t a b a s e }  
     ?   ( D a t a b a s e [ P u b l i c T a b l e N a m e O r O p t i o n s [ " s c h e m a " ] ] [ " T a b l e s " ]   &  
             D a t a b a s e [ P u b l i c T a b l e N a m e O r O p t i o n s [ " s c h e m a " ] ] [ " V i e w s " ] ) [ T a b l e N a m e ]   e x t e n d s   {  
             R o w :   i n f e r   R ;  
         }  
         ?   R  
         :   n e v e r  
     :   P u b l i c T a b l e N a m e O r O p t i o n s   e x t e n d s   k e y o f   ( D a t a b a s e [ " p u b l i c " ] [ " T a b l e s " ]   &  
                 D a t a b a s e [ " p u b l i c " ] [ " V i e w s " ] )  
         ?   ( D a t a b a s e [ " p u b l i c " ] [ " T a b l e s " ]   &  
                 D a t a b a s e [ " p u b l i c " ] [ " V i e w s " ] ) [ P u b l i c T a b l e N a m e O r O p t i o n s ]   e x t e n d s   {  
                 R o w :   i n f e r   R ;  
             }  
             ?   R  
             :   n e v e r  
         :   n e v e r ;  
  
 e x p o r t   t y p e   T a b l e s I n s e r t <  
     P u b l i c T a b l e N a m e O r O p t i o n s   e x t e n d s   k e y o f   D a t a b a s e [ " p u b l i c " ] [ " T a b l e s " ]   |   { s c h e m a :   k e y o f   D a t a b a s e } ,  
     T a b l e N a m e   e x t e n d s   P u b l i c T a b l e N a m e O r O p t i o n s   e x t e n d s   { s c h e m a :   k e y o f   D a t a b a s e }  
         ?   k e y o f   D a t a b a s e [ P u b l i c T a b l e N a m e O r O p t i o n s [ " s c h e m a " ] ] [ " T a b l e s " ]  
         :   n e v e r   =   n e v e r ,  
 >   =   P u b l i c T a b l e N a m e O r O p t i o n s   e x t e n d s   { s c h e m a :   k e y o f   D a t a b a s e }  
     ?   D a t a b a s e [ P u b l i c T a b l e N a m e O r O p t i o n s [ " s c h e m a " ] ] [ " T a b l e s " ] [ T a b l e N a m e ]   e x t e n d s   {  
             I n s e r t :   i n f e r   I ;  
         }  
         ?   I  
         :   n e v e r  
     :   P u b l i c T a b l e N a m e O r O p t i o n s   e x t e n d s   k e y o f   D a t a b a s e [ " p u b l i c " ] [ " T a b l e s " ]  
         ?   D a t a b a s e [ " p u b l i c " ] [ " T a b l e s " ] [ P u b l i c T a b l e N a m e O r O p t i o n s ]   e x t e n d s   {  
                 I n s e r t :   i n f e r   I ;  
             }  
             ?   I  
             :   n e v e r  
         :   n e v e r ;  
  
 e x p o r t   t y p e   T a b l e s U p d a t e <  
     P u b l i c T a b l e N a m e O r O p t i o n s   e x t e n d s   k e y o f   D a t a b a s e [ " p u b l i c " ] [ " T a b l e s " ]   |   { s c h e m a :   k e y o f   D a t a b a s e } ,  
     T a b l e N a m e   e x t e n d s   P u b l i c T a b l e N a m e O r O p t i o n s   e x t e n d s   { s c h e m a :   k e y o f   D a t a b a s e }  
         ?   k e y o f   D a t a b a s e [ P u b l i c T a b l e N a m e O r O p t i o n s [ " s c h e m a " ] ] [ " T a b l e s " ]  
         :   n e v e r   =   n e v e r ,  
 >   =   P u b l i c T a b l e N a m e O r O p t i o n s   e x t e n d s   { s c h e m a :   k e y o f   D a t a b a s e }  
     ?   D a t a b a s e [ P u b l i c T a b l e N a m e O r O p t i o n s [ " s c h e m a " ] ] [ " T a b l e s " ] [ T a b l e N a m e ]   e x t e n d s   {  
             U p d a t e :   i n f e r   U ;  
         }  
         ?   U  
         :   n e v e r  
     :   P u b l i c T a b l e N a m e O r O p t i o n s   e x t e n d s   k e y o f   D a t a b a s e [ " p u b l i c " ] [ " T a b l e s " ]  
         ?   D a t a b a s e [ " p u b l i c " ] [ " T a b l e s " ] [ P u b l i c T a b l e N a m e O r O p t i o n s ]   e x t e n d s   {  
                 U p d a t e :   i n f e r   U ;  
             }  
             ?   U  
             :   n e v e r  
         :   n e v e r ;  
  
 e x p o r t   t y p e   E n u m s <  
     P u b l i c E n u m N a m e O r O p t i o n s   e x t e n d s   k e y o f   D a t a b a s e [ " p u b l i c " ] [ " E n u m s " ]   |   { s c h e m a :   k e y o f   D a t a b a s e } ,  
     E n u m N a m e   e x t e n d s   P u b l i c E n u m N a m e O r O p t i o n s   e x t e n d s   { s c h e m a :   k e y o f   D a t a b a s e }  
         ?   k e y o f   D a t a b a s e [ P u b l i c E n u m N a m e O r O p t i o n s [ " s c h e m a " ] ] [ " E n u m s " ]  
         :   n e v e r   =   n e v e r ,  
 >   =   P u b l i c E n u m N a m e O r O p t i o n s   e x t e n d s   { s c h e m a :   k e y o f   D a t a b a s e }  
     ?   D a t a b a s e [ P u b l i c E n u m N a m e O r O p t i o n s [ " s c h e m a " ] ] [ " E n u m s " ] [ E n u m N a m e ]  
     :   P u b l i c E n u m N a m e O r O p t i o n s   e x t e n d s   k e y o f   D a t a b a s e [ " p u b l i c " ] [ " E n u m s " ]  
         ?   D a t a b a s e [ " p u b l i c " ] [ " E n u m s " ] [ P u b l i c E n u m N a m e O r O p t i o n s ]  
         :   n e v e r ;  
 